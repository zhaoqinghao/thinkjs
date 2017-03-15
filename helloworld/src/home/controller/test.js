'use strict';

import Base from './base.js'

export default class extends Base{
    indexAction(){
         //auto render template file test_index.html
         this.assign("test",{title:'123123',hehe:'test'});
         return this.display();
      }
 }