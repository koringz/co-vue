import Vue from "vue"

import coHead from './head/coHead';
import coTabs from './tabs/coTabs';
import coCollapse from './collapse/collapse';
import coCollapseItem from './collapse/collapse-item';
import coButtonGroup from './button/coButtonGroup';
import coButton from './button/coButton';
import coTable from './table/coTable';
import coDialog from './dialog/coDialog';
import coSwitch from './switch/coSwitch';
import coInput from './input/coInput';
import coInputNumber from './inputNumber/coInputNumber';

Vue.component('co-input',coInput);

export { 
	coHead, 
	coTabs, 
	coCollapse, 
	coCollapseItem, 
	coButton, 
	coButtonGroup, 
	coDialog, 
	coTable, 
	coSwitch, 
	coInput,
	coInputNumber,
}