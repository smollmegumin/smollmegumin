const range = (start, end, steps = 1) => {
  let new_arr = [];
  for (let i = start; i <= end; i += steps) {
    new_arr = [...new_arr, i];
  }
  return new_arr;
};

const sum = (arr = []) => arr.reduce((acc, current) => acc + current, 0);

console.log(sum(range(1, 10)));

const reverse = (arr = []) => {
  let new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.unshift(arr[i]);
  }
  return new_arr;
};

const reverse_in_place = (arr) => {
  let temp = null;

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    let last = arr.length - 1 - i;
    arr[i] = arr[last];
    arr[last] = temp;
  }
};

console.log(reverse([1, 2, 3, 4]));
let arr = [1, 2, 3, 4];
reverse_in_place(arr);
console.log(arr);

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

//? Builds up a list structure like the one shown  above
const array_to_list = (arr = []) => {
  let obj_list = null;

  for (let value = arr.length - 1; value >= 0; value--) {
    obj_list = { value: arr[value], rest: obj_list };
  }
  return obj_list;
};

const list_to_arr = (list) => {
  let new_arr = [];

  for (let node = list; node; node = node.rest) {
    new_arr.push(node.value);
  }
  return new_arr;
};

const ntg = (list, index) => {
  if (index == 0) {
    return list.value;
  }
  return ntg(list.rest, index-1);
};

console.log(array_to_list([1, 2, 3]));
console.log(list_to_arr(list));
console.log(ntg(array_to_list([1, 2, 4]), 1));
