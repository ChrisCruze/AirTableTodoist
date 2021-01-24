import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";
import { Button, Box, Text } from "@airtable/blocks/ui";

import { base } from "@airtable/blocks";
import { pullTodoistCompleted } from "./todoistCompleted";

async function updateAirTableHours({ todoist_completed_tasks }) {
  let table = base.getTable("Projects");
  let query = await table.selectRecordsAsync();
  const records = query.records;
  const records_transformed = records.map(record => {
    table.updateRecordAsync(record, { Test: record.getCellValue("Name") });
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
