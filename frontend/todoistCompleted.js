import _ from "lodash";
import moment from "moment";
import axios from "axios";
//pull the first date of the array
function array_pull_first_date_dict(array, key_name) {
  return _.min(array, function(D) {
    return moment(D[key_name]).unix();
  });
}
//pull the last day of the array
function array_pull_last_date_dict(array, key_name) {
  return _.max(array, function(D) {
    return moment(D[key_name]).unix();
  });
}
//pull the first date of the array
function array_pull_first_date(array, key_name) {
  return array_pull_last_date_dict(array, key_name)[key_name];
}

//pull the last day of the array
function array_pull_last_date(array, key_name) {
  return array_pull_first_date_dict(array, key_name)[key_name];
}

function moment_difference_hours(startTime, endTime) {
  //https://stackoverflow.com/questions/25150570/get-hours-difference-between-two-dates-in-moment-js
  var duration = moment.duration(endTime.diff(startTime));
  var hours = duration.asHours();
  return hours;
}

//calculate the cost of the task at 15 dollar per rate
function task_cost_calculation(item, key_name, hourly_rate) {
  var hourly_rate = hourly_rate || 15;
  var key_name = key_name || "duration";
  var minutes = parseFloat(item[key_name]);
  var cost = minutes * (hourly_rate / 60);
  return cost;
}

const projects_dictionary = [
  {
    indent: 1,
    name: "JP",
    is_favorite: 0,
    color: 5,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 1,
    is_archived: 0,
    shared: false,
    id: 2159934072
  },
  {
    is_favorite: 0,
    color: 7,
    collapsed: 0,
    inbox_project: true,
    id: 2159896038,
    indent: 1,
    name: "Inbox",
    is_deleted: 0,
    parent_id: null,
    item_order: 0,
    shared: false,
    is_archived: 0
  },
  {
    indent: 1,
    name: "Bnb",
    is_favorite: 0,
    color: 13,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 2,
    is_archived: 0,
    shared: true,
    id: 2159935681
  },
  {
    indent: 1,
    name: "Entrepreneurship",
    is_favorite: 0,
    color: 18,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 3,
    is_archived: 0,
    shared: true,
    id: 2159934063
  },
  {
    indent: 1,
    name: "Fitness",
    is_favorite: 0,
    color: 15,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 4,
    is_archived: 0,
    shared: false,
    id: 2159936401
  },
  {
    indent: 1,
    name: "Life Engineering",
    is_favorite: 0,
    color: 16,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 5,
    is_archived: 0,
    shared: false,
    id: 2160096908
  },
  {
    indent: 1,
    name: "Homeostasis",
    is_favorite: 0,
    color: 20,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 6,
    is_archived: 0,
    shared: false,
    id: 2159896039
  },
  {
    indent: 1,
    name: "Finance",
    is_favorite: 0,
    color: 7,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 7,
    is_archived: 0,
    shared: false,
    id: 2168189199
  },
  {
    indent: 1,
    name: "Social",
    is_favorite: 0,
    color: 3,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 8,
    is_archived: 0,
    shared: false,
    id: 2159934103
  },
  {
    indent: 1,
    name: "Real Estate",
    is_favorite: 0,
    color: 7,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 9,
    is_archived: 0,
    shared: false,
    id: 2177944736
  },
  {
    indent: 1,
    name: "Automation Application Development",
    is_favorite: 0,
    color: 19,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 10,
    is_archived: 0,
    shared: true,
    id: 2173942617
  },
  {
    indent: 1,
    name: "C_N",
    is_favorite: 0,
    color: 7,
    is_deleted: 0,
    collapsed: 0,
    parent_id: null,
    item_order: 11,
    is_archived: 0,
    shared: true,
    id: 2166164535
  }
];
const labels_dictionary = [
  {
    item_order: 3,
    is_deleted: 0,
    name: "15min",
    color: 7,
    is_favorite: 0,
    id: 2148355702
  },
  {
    item_order: 4,
    is_deleted: 0,
    name: "25min",
    color: 7,
    is_favorite: 0,
    id: 2148353598
  },
  {
    item_order: 16,
    is_deleted: 0,
    name: "2min",
    color: 7,
    is_favorite: 0,
    id: 2149153704
  },
  {
    item_order: 5,
    is_deleted: 0,
    name: "50min",
    color: 7,
    is_favorite: 0,
    id: 2148353599
  },
  {
    item_order: 2,
    is_deleted: 0,
    name: "5min",
    color: 7,
    is_favorite: 0,
    id: 2148353597
  },
  {
    item_order: 6,
    is_deleted: 0,
    name: "90min",
    color: 7,
    is_favorite: 0,
    id: 2148353600
  },
  {
    item_order: 12,
    is_deleted: 0,
    name: "BigFish",
    color: 7,
    is_favorite: 0,
    id: 2148444040
  },
  {
    item_order: 7,
    is_deleted: 0,
    name: "Code",
    color: 7,
    is_favorite: 0,
    id: 2148355626
  },
  {
    item_order: 9,
    is_deleted: 0,
    name: "Email",
    color: 7,
    is_favorite: 0,
    id: 2148355678
  },
  {
    item_order: 15,
    is_deleted: 0,
    name: "Excercise",
    color: 7,
    is_favorite: 0,
    id: 2148778251
  },
  {
    item_order: 14,
    is_deleted: 0,
    name: "Habit",
    color: 7,
    is_favorite: 0,
    id: 2148778212
  },
  {
    item_order: 18,
    is_deleted: 0,
    name: "Key",
    color: 7,
    is_favorite: 0,
    id: 2149463363
  },
  {
    item_order: 11,
    is_deleted: 0,
    name: "Philly",
    color: 7,
    is_favorite: 0,
    id: 2148394340
  },
  {
    item_order: 10,
    is_deleted: 0,
    name: "Phone",
    color: 7,
    is_favorite: 0,
    id: 2148355700
  },
  {
    item_order: 8,
    is_deleted: 0,
    name: "Purchase",
    color: 7,
    is_favorite: 0,
    id: 2148355656
  },
  {
    item_order: 13,
    is_deleted: 0,
    name: "SmallFish",
    color: 7,
    is_favorite: 0,
    id: 2148444042
  },
  {
    item_order: 1,
    is_deleted: 0,
    name: "now",
    color: 7,
    is_favorite: 0,
    id: 2148739952
  }
];

//converts minute labels to minutes
function labels_add_from_labels_dictionary(task_item, labels_dictionary) {
  var labels_list = task_item.labels;
  var label_list_is_undefined = labels_list == undefined;
  if (label_list_is_undefined) {
    var r = 0;
  }
  try {
    var r = 0;
    labels_list.forEach(function(item, index) {
      var label_dict = labels_dictionary[item];
      var minute_number = label_dict.minute || label_minute_string_to_integer(label_dict.name);
      var r = r + minute_number;
    });
  } catch (err) {
    var r = 0;
  }

  task_item["duration"] = task_item["duration"] || r;
  return task_item;
}

function project_name_append(item, projects_dictionary) {
  var item_project_dictionary = _.groupBy(projects_dictionary, "id")[item.project_id];
  if (item_project_dictionary != undefined) {
    var project_name = item_project_dictionary[0].name;
  } else {
    var project_name = "null";
  }
  item["project_name"] = project_name;
  return item;
}

function todoist_dict_project_label_name(item) {
  var item = project_name_append(item, projects_dictionary);
  var item = labels_add_from_labels_dictionary(item, labels_dictionary);
  return item;
}

function sub_content_create(todoist_dict) {
  const content = todoist_dict["content"];
  const sub_content = content.split("[")[0].split(":")[1] || "";
  const sub_content_part = sub_content.split("-")[0].trim();
  todoist_dict["sub_content"] = sub_content_part;
  return todoist_dict;
}

function section_create(todoist_dict) {
  const content = todoist_dict["content"];
  if (content.indexOf("-") > -1) {
    const section = content
      .split("[")[0]
      .split(":")[1]
      .split("-")[0];
    todoist_dict["section"] = section;
    return todoist_dict;
  } else {
    todoist_dict["section"] = "-";
    return todoist_dict;
  }
}
//return the sub project by parsing it out from the colon
function sub_project_from_task(item) {
  var item_name = item.content;
  var sub_project = item_name.split(":")[0].trim();
  var is_sub_project = sub_project.indexOf("|") == -1 && sub_project.indexOf("[") == -1 && sub_project.indexOf("@") == -1;
  if (is_sub_project) {
    return sub_project; //'-'
  } else {
    return "-";
  }
}
function regex_between_brackets_pull(my_string) {
  var matches = my_string.match(/\[(.*?)\]/);

  if (matches) {
    var submatch = matches[1];
  }
  var submatch = submatch || null;
  return submatch;
}

function completed_task_start_time_end_time(D) {
  var between_brackets_text = regex_between_brackets_pull(D.content);
  if (between_brackets_text != null) {
    var between_brackets_text_time = between_brackets_text.split("|")[0];
    var start_time = between_brackets_text_time.split("-")[0];
    var end_time = between_brackets_text_time.split("-")[1];
    var completed_date = moment(D["completed_date"]).format("MM-DD-YYYY");

    var start_time_moment = moment(completed_date + " " + start_time, "MM-DD-YYYY h:mm:ssa");
    var end_time_moment = moment(completed_date + " " + end_time, "MM-DD-YYYY h:mm:ssa");
    D.start_time = start_time_moment.format();
    D.end_time = end_time_moment.format();
  } else {
    D.start_time = null;
    D.end_time = null;
  }
  return D;
}

//return duration from the task name
function duration_from_task_dictionary(item) {
  var item_name = item.content;
  var item_has_time = item_name.indexOf("|") != -1 && item_name.indexOf("[") != -1 && item_name.indexOf("]") != -1;
  if (item_has_time) {
    var duration = parseInt(item_name.substring(item_name.lastIndexOf("|") + 1, item_name.lastIndexOf("min")));
  } else {
    var duration = 0;
  }
  return duration;
}

//customize each dictionary of todoist task for additional attributes
function tasks_array_customize_item(item) {
  item["sub_project"] = sub_project_from_task(item); //item_name.split(":")[0].trim()
  item["duration"] = duration_from_task_dictionary(item);
  item["cost"] = task_cost_calculation(item);
  item["DT_RowId"] = item.id;
  return item;
}

function todoist_dict_customize(todoist_dict) {
  var todoist_dict = tasks_array_customize_item(todoist_dict);
  var todoist_dict = sub_content_create(todoist_dict);
  var todoist_dict = section_create(todoist_dict);

  var todoist_dict = todoist_dict_project_label_name(todoist_dict);
  var todoist_dict = completed_task_start_time_end_time(todoist_dict);
  return todoist_dict;
}

function determine_if_response_available(response) {
  return response != undefined;
}

function labels_from_response(response) {
  return response.labels;
}

function labels_to_label_dict(labels_list) {
  const label_dict = array_groupby_flat(labels_list, "id");
  return label_dict;
}
function labels_numbers_to_labels_names_lookup(task_label_num, label_dict) {
  const label_dict_looked_up = label_dict[task_label_num] || {};
  const label_name = label_dict_looked_up["name"];
  return label_name;
}

function labels_numbers_to_labels_names(task_labels_list, label_dict) {
  return _.map(task_labels_list, function(task_label_num) {
    return labels_numbers_to_labels_names_lookup(task_label_num, label_dict);
  });
}

function label_name_append_to_array_todoist_dict(todoist_dict, label_dict) {
  const task_labels_list = todoist_dict.labels;
  const labels_name_list = labels_numbers_to_labels_names(task_labels_list, label_dict);
  const labels_name = labels_name_list.join(",");
  return { ...todoist_dict, labels_name };
}
function label_name_append_to_array_todoist_array(todoist_array, label_dict) {
  return _.map(todoist_array, function(todoist_dict) {
    return label_name_append_to_array_todoist_dict(todoist_dict, label_dict);
  });
}
function label_name_append_to_array(todoist_array, response) {
  const labels_list = labels_from_response(response);
  const label_dict = labels_to_label_dict(labels_list);
  return label_name_append_to_array_todoist_array(todoist_array, label_dict);
}

function duration_from_label_name_string(todoist_dict) {
  const label_name = todoist_dict["labels_name"];
  const duration = parseInt(regex_number_from_string(label_name)) || 0;
  return duration;
}
function duration_from_label_name_append_dict(todoist_dict) {
  const duration = duration_from_label_name_string(todoist_dict);
  return { ...todoist_dict, duration };
}
function duration_from_label_name_append_array(todoist_array) {
  return _.map(todoist_array, duration_from_label_name_append_dict);
}

function todoist_array_customize(todoist_array, response) {
  todoist_array.forEach(function(todoist_dict) {
    tasks_array_customize_item(todoist_dict);
    sub_content_create(todoist_dict);
    todoist_dict_project_label_name(todoist_dict);
  });

  if (determine_if_response_available(response)) {
    const label_array = label_name_append_to_array(todoist_array, response);
    const label_with_duration_array = duration_from_label_name_append_array(label_array);
    return label_with_duration_array;
  } else {
    return todoist_array;
  }
}

const pre_pend_url = "";

//remove promise
const updateTodoistOffsetOld = value =>
  new Promise(resolve =>
    $.ajax({
      type: "GET",
      url: pre_pend_url + "https://todoist.com/api/v8/completed/get_all",
      dataType: "json",
      async: false,
      data: {
        token: "a14f98a6b546b044dbb84bcd8eee47fbe3788671",
        limit: "50",
        offset: value.length * 50
      }
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.log({ error, type: "updateTodoistOffset" });
      })
  );
const updateTodoistOffset = value =>
  new Promise(resolve =>
    axios
      .get(pre_pend_url + "https://todoist.com/api/v8/completed/get_all", {
        params: {
          token: "a14f98a6b546b044dbb84bcd8eee47fbe3788671",
          limit: "50",
          offset: value.length * 50
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log({ error, type: "updateTodoistOffset" });
      })
  );
function todoist_result_flatten(final_response) {
  var all_items = [];
  final_response.forEach(function(single_response) {
    const single_response_customized = todoist_array_customize(single_response.items);
    all_items = all_items.concat(single_response_customized);
  });
  return all_items;
}

//determine if it qualifies for a certain number of days back
function todoist_determine_if_result_qualifies_for_earliest_date({ items, days_back_required }) {
  var earliest_completed_date = array_pull_last_date(items, "completed_date");
  //determine how far back it is
  var days_back_completed = moment_difference_hours(moment(earliest_completed_date), moment()) / 24;
  //want it to be true if greater than 45 days
  //console.log({ days_back_completed, items });
  return days_back_completed > days_back_required; //|| 45;
}

function url_params_pull() {
  a = window.location.search.substr(1).split("&");
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split("=", 2);
    if (p.length == 1) b[p[0]] = "";
    else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
}

export const pullTodoistCompleted = value =>
  updateTodoistOffset(value).then(result => {
    var earliest_date_is_sufficient = todoist_determine_if_result_qualifies_for_earliest_date({
      items: result.items,
      days_back_required: 90
    });
    if (earliest_date_is_sufficient) {
      const transformed_response = todoist_result_flatten(value);
      return transformed_response;
    } else {
      value.push(result);
      return pullTodoistCompleted(value);
    }
  });
