'use strict';

import Base from './base.js';
import jade from 'jade';
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    console.log(1111);
    let jadepath = think.ROOT_PATH+'/view/home/comm/area-test.jade';
    console.log(jadepath);
    let html = jade.compileFile(jadepath,{cache: true})({title:'123123这里是node-thinkjs打出的数据'});

    this.assign('html','<h1>dceshi</h1>');
    this.assign('html2',html);
    return this.display();
  }
}