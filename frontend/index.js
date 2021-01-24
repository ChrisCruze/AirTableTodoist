import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";
import { Button, Box, Text } from "@airtable/blocks/ui";

import { base } from "@airtable/blocks";
import { pullTodoistCompleted } from "./todoistCompleted";
import moment from "moment";

import _ from "lodash";
function regex_number_from_string(input_string) {
  //https://stackoverflow.com/questions/1183903/regex-using-javascript-to-return-just-numbers
  return String(input_string).replace(/\D/g, "");
}
function array_sum_from_key_name(arr, key_name) {
  // returns the sum total of all values in the array
  return _.reduce(
    arr,
    function(memo, num) {
      var r = memo + (parseFloat(num[key_name]) || 0);
      return r;
    },
    0
  );
}

const calculate_from_todoist_fields = ({ field, todoist_completed_tasks }) => {
  var field_name = field.name;
  var days = parseFloat(regex_number_from_string(field_name)) || 7;
  var filtered_todoist_completd = todoist_completed_tasks.filter(function(D) {
    return Math.abs(moment(D["completed_date"]).diff(moment(), "days")) <= days;
  });
  var D = {};
  D[field.name] = array_sum_from_key_name(filtered_todoist_completd, "duration") / 60;
  return D;
};

const calculated_field_updates = ({ name, fields, todoist_completed_tasks }) => {
  var D = {};
  var filtered_fields = fields.filter(function(D) {
    return D.name.indexOf("Hours") > -1;
  });
  filtered_fields.forEach(function(field) {
    var field_result = calculate_from_todoist_fields({ field, todoist_completed_tasks });
    D = Object.assign({}, D, field_result);
  });
  return D;
};

async function updateAirTableHours({ todoist_completed_tasks }) {
  const sub_content_grouped = _.groupBy(todoist_completed_tasks, "sub_project");
  let table = base.getTable("Projects");
  const fields = table.fields;
  let query = await table.selectRecordsAsync();
  const records = query.records;
  const records_transformed = records.map(record => {
    const name = record.getCellValue("Name");
    const todoist_completed_tasks_filtered = sub_content_grouped[name] || [];
    const updated_dict = calculated_field_updates({ name, fields, todoist_completed_tasks: todoist_completed_tasks_filtered });
    table.updateRecordAsync(record, updated_dict);
  });
  return records_transformed;
}

const UpdateButton = () => {
  const onClick = () => {
    pullTodoistCompleted([]).then(todoist_completed_tasks => {
      console.log({ todoist_completed_tasks });
      updateAirTableHours({ todoist_completed_tasks });
    });
  };
  return (
    <Button onClick={onClick} icon="edit">
      Update
    </Button>
  );
};

function HelloWorldApp() {
  return (
    <div>
      <Box border="default" backgroundColor="white" padding={0} width={200} height={200} overflow="hidden">
        <Text>Content</Text>
        <UpdateButton />
      </Box>
    </div>
  );
}

initializeBlock(() => <HelloWorldApp />);
