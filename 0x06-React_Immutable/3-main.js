import { getListObject, addElementToList } from './3-list';

const list = getListObject(['John', 'Joel']);

console.log(getListObject(list));

console.log(addElementToList(list, 'Yahaya'));
