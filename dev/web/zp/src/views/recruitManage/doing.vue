/*
 * @Author: liuyr 
 * 招聘中页面
 * @Date: 2019-12-23 17:03:30 
 * @Last Modified by: mikey.zhaopeng
<<<<<<< HEAD
 * @Last Modified time: 2019-12-30 01:36:10
=======
 * @Last Modified time: 2019-12-29 20:47:48
>>>>>>> d011a96c8cdfcb99e24a41882eef7f714eccedf8
 */
<template>
  <div id="recruitDoing">    
    
    <div class="recruitContainer">

      <!-- 按钮搜索栏占行 -->
      <div class="BtnContainer">

        <!-- 搜索栏    -->
        <div class="SearchBox"> 
                 
          <!-- <div style="margin-top: 0px;">    
            <el-select v-model="key" style="width:110px;" placeholder="关键字">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>           
            <el-input @change="searchChange" placeholder="请输入关键字" v-model="string" style="width:200px;" class="input-with-select">             
              <el-button @click="keySearch" slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>  -->

<<<<<<< HEAD
           <el-input placeholder="请输入内容" @change="searchChange" id="searchInput" v-model="string" class="input-with-select">
            <el-select v-model="key" slot="prepend" class="searchSelect"  placeholder="请选择">
=======
           <el-input placeholder="请输入内容" @change="searchChange"  v-model="string" class="input-with-select">
            <el-select v-model="key" slot="prepend" style="width:120px" placeholder="请选择">
>>>>>>> d011a96c8cdfcb99e24a41882eef7f714eccedf8
              <el-option v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
            </el-select>
            <el-button slot="append" @click="keySearch" icon="el-icon-search"></el-button>
          </el-input> 

        </div>


      <!-- 职位选择筛选器 -->
       <div class="jobDropDownBox">
          <el-select @change="JobSelect" clearable v-model="job" placeholder="职位类型" >
            <el-option class="oooo"
              
              v-for="item in jobData"
              :key="item.id"
              :label="item"
              :value="item">
            </el-option>
          </el-select>

        </div>
         
      </div>

      <!-- 数据表格信息 -->
      <div class="formContainer">
        <el-table
        ref="multipleTable"       
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
       
          type="selection"
          width="55">
          </el-table-column>
          <el-table-column prop="title" label="招聘标题"></el-table-column>
          <el-table-column prop="contactName" label="发布人" ></el-table-column>
          <el-table-column prop="contactPhone" label="联系方式" show-overflow-tooltip></el-table-column>
          <el-table-column prop="job" label="职位" show-overflow-tooltip></el-table-column>
          <el-table-column prop="publishTime"  label="发布时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="zip"  label="详情"  >
              <template slot-scope="scope">
                  <el-button @click="toSee(scope.row)" type="text" size="small" >查看</el-button>
                </template>
          </el-table-column>
          <el-table-column    
              label="操作"
              fixed="right"
              width="100">
              <template slot-scope="scope">
                <el-button @click="toEdit(scope.row)"  type="text" size="small">编辑</el-button>
                <el-button @click="toDelete(scope.row.id)" type="text" size="small">删除</el-button>
              </template>
          </el-table-column>
        </el-table>

      </div>

    <!-- 招聘container关闭div标签 -->
    </div>  

    <!-- 底部分页盒子包含批量删除按钮 -->
    <div class="PaginationBox">

      <!-- 批量删除按钮 -->
       <el-button type="danger" @click="toBatchDelete" size="small" plain>批量删除</el-button>


      <!-- 分页器 -->
      <el-pagination class="PageChange" background layout="prev, pager, next"    
      :total="tableData.length" @current-change="huanye" 
      :current-page.sync="currentPage">
      </el-pagination>
    </div>

    <!-- 模态框盒子 -->
    <div class="moderBox">

      <!-- 查看模态框 -->
      <el-dialog class="toSeeBox"
        :title="toSeeTitle.title"
        :visible.sync="dialogVisible"
        width="45%"
        :before-close="handleClose">

        <!-- 最外层容器 -->
        <div class="seeBoxContainer">

           <!-- 第一行 -->
          <div class="oneFlour Flour">

            <!-- 左边的招聘人数和地址 -->
            <div class="oneFlourLeft">
              <div class="zhaoren1"><i class="el-icon-document"> 需求人数：{{toSeeTitle.num}}</i> </div>
              <div class="position"><i class="el-icon-location"> {{toSeeTitle.province}}-{{toSeeTitle.city}}-{{businessName}} </i></div>
            </div>

            <!-- 右边的工资 -->
            <div  class="oneFlourRight">        
              <div class="salary"><h2>{{toSeeTitle.salary}}元/月</h2></div>
            </div>

          </div>

          <!-- 第二行 -->
          <div class="twoFlour Flour">

<<<<<<< HEAD
            <div class="tagBox" >
=======
            <div class="tagBox">
>>>>>>> d011a96c8cdfcb99e24a41882eef7f714eccedf8
              <el-tag style="margin-right:3px;"
                :key="tag"
                v-for="tag in welfareData"
                :disable-transitions="false">
                {{tag}}
              </el-tag>
            </div>

          </div>

          <!-- 第三行 -->
          <div class="threeFlour Flour">
            <!-- 分割线 -->
            <div class="fence">
              <hr  style="FILTER:alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#ff9900 SIZE=3 />
            </div>
          </div>

          <!-- 第四行 -->
          <div class="fourFlour Flour">
            <el-row>
              <el-col :span="24"> <b>职位：{{toSeeTitle.job}}</b> </el-col>
            </el-row>
          </div>

          <!-- 第五行 -->
          <div class="fiveFlour Flour">
            <b>职位介绍</b>
          </div>

          <!-- 第六行 -->
          <div class="sixFlour Flour">
            <div class="workingHours">
              每天工作{{toSeeTitle.workingHours}}小时
            </div>
          </div>


          <!-- 第七行 -->
          <div class="sevenFlour Flour">
            <div class="desc">
              {{toSeeTitle.description}}
            </div>
          </div>

        </div>

        <!-- 脚步按钮 -->
        <span slot="footer" class="dialog-footer">        
          <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
        </span>
      </el-dialog>

      <!-- 编辑模态框 -->
      <el-dialog title="编辑" class="editBox"  :visible.sync="editVisible" :before-close="beforeClose">
        <el-form :model="toSeeTitle" ref="ruleForm" :rules="rules">

        <el-row>
          <el-col :span="12">
            <el-form-item label="招聘ID号" prop="id" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.id"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="职业ID号" prop="jobid" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.job_id"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="招聘标题" prop="title" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.title"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="职业类型" prop="job" :label-width="formLabelWidth">
                        <el-select @change="JobSelect" clearable v-model="toSeeTitle.job" placeholder="职位类型" >
            <el-option class="oooo"
              
              v-for="item in jobData"
              :key="item.id"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" prop="businessId" :label-width="formLabelWidth">
              <!-- <el-input v-model="businessName"></el-input> -->
                <el-select
                      @change="dialogProChange"
                      v-model="toSeeTitle.businessId"
                      placeholder="请选择企业">
                      <el-option
                        v-for="item in AllBusiness"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                </el-select>              
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="需要人数" prop="num" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.num"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="所在省份" prop="province" :label-width="formLabelWidth">
              <!-- <el-input v-model="toSeeTitle.province"></el-input> -->
                <el-select
                      @change="dialogProChange"
                      v-model="toSeeTitle.province"
                      placeholder="请选择省份">
                      <el-option
                        v-for="item in provinceData"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                </el-select>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="所在城市" prop="city" :label-width="formLabelWidth">
              <!-- <el-input v-model="toSeeTitle.city"></el-input> -->
                <el-select
                      v-model="toSeeTitle.city"
                      placeholder="请选择城市">
                      <el-option
                        v-for="item in provinceCityData"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                </el-select>
            </el-form-item>
          </el-col>
        </el-row>




        <el-row>
          <el-col :span="12">
            <el-form-item label="发布人员" prop="contactName" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.contactName"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="联系方式" prop="contactPhone" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.contactPhone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="当前状态" prop="status" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.status"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="审核状态" prop="auditStatus" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.auditStatus"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="每月薪水" prop="salary" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.salary"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :span="12">
            <el-form-item label="每日工时" prop="workingHours" :label-width="formLabelWidth">
              <el-input v-model="toSeeTitle.workingHours"></el-input>
            </el-form-item>
          </el-col>
        </el-row>



        <el-row>
          <el-col :span="24">
            <el-form-item label="描述" prop="description" :label-width="formLabelWidth">
              <el-input type="textarea" v-model="toSeeTitle.description"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="公司福利" prop="welfare" :label-width="formLabelWidth">

              <!-- 标签显示，可删除 -->
              <el-tag style="margin-right:3px;"
                closable
                :key="tag"
                v-for="tag in welfareData"
                @close="tagclose(tag)"
                :disable-transitions="false">
                {{tag}}
              </el-tag>

              <!-- 新建标签 -->
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm">
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
            </el-form-item>
          </el-col>
        </el-row>
<<<<<<< HEAD

        <el-row>
          <el-col :span="24">
            
            <div class="btnBox">
              <el-button class="editbutton" type="primary" @click="toSave('ruleForm')">保 存</el-button>
               <el-button class="editbutton" @click="toCancel('ruleForm')">取 消</el-button>
            

=======

        <el-row>
          <el-col :span="24">
            
            <div class="btnBox">
              <el-button class="editbutton" type="primary" @click="toSave('ruleForm')">保 存</el-button>
               <el-button class="editbutton" @click="toCancel('ruleForm')">取 消</el-button>
            

>>>>>>> d011a96c8cdfcb99e24a41882eef7f714eccedf8
            </div>
           
            
          </el-col>
        </el-row>


        </el-form>

      </el-dialog>

    </div>

  </div>
</template>

<script>
import {findCityByProvinceId } from "@/api/city.js";
import {findAllEmployment,findEmploymentByJob,deleteEmploymentById,saveOrUpdateEmployment,
        findEmploymentByTitle} from '@/api/employment-controller.js';
import {findAllProvince,findProvinceById} from '@/api/province.js';
import {findBusinessById,findAllBusiness} from '@/api/business.js';
import config from '@/utils/config.js';

export default {
  data() {
    return { 
      inputVisible: false, inputValue: '',//新建标签用到的属性
      welfareData:[],                      //遍历福利用到的属性
      provinceData:[],provinceCityData:[], //这里是模态框编辑数据使用的省份和城市选择数组，因为后台没有给相应接口
      formLabelWidth:"80px",                //模态框统一宽度
      businessName:"",                        
      AllBusiness:"",                      //商家信息，用于把商家id转换为商家名称
      string:"",
      matchData:"",
      editVisible:false,  //这个是编辑模态框
      dialogVisible:false,//这个是查看模态框
      toSeeTitle:[],      //这个是查看和编辑模态框绑定的数据
      ids:[],             //这个是储存批量删除的数组，因为后台没给接口
      deleteId:"",
      pagesize:10,
      currentPage:1,//当前页
      tableData:[],
      publishTimeData:[],
      job:"",key: '发布人',
      jobData:[],
      options: [{
          value: '招聘标题',
          label: '招聘标题'
        }, {
          value: '发布人',
          label: '发布人'
        }, {
          value: '职位',
          label: '职位'
        },],
      
      rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
         job: [
            { required: true, message: '请输入职业类型名称', trigger: 'blur' }
          ],
          contactName: [
            { required: true, message: '请输入联系人', trigger: 'blur'  }
          ],
          contactPhone: [
            { required: true, message: '请输入联系方式', trigger: 'blur'  }
          ],
          description: [
            { required: true, message: '请输入内容', trigger: 'blur'  }
          ],
          province: [
          { required: true, message: "请选择省份", trigger: "change" }
          ],
          city: [{ required: true, message: "请选择城市", trigger: "change" }]
        },
    };
  },
  computed: {
    // tableList(){
    //   let temp = [...this.tableData];
    //   let pageSize=10;
    //   let page = this.currentPage;
    //   temp.slice(0,pageSize);
    //   return temp.slice((page-1)*pageSize,pageSize*page);
    // }

 

  },
  methods: {

    //标签管理
    //----新建标签----
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.welfareData.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },


    //----关闭标签----
    tagclose(tag) {
      this.welfareData.splice(this.welfareData.indexOf(tag), 1);
      },

    //搜索框发生改变
    searchChange(val){
    },

    //关键字搜索
    async keySearch(){
      //先过滤未通过的
      let data = await findAllEmployment();
      var reg=new RegExp("招聘中");
      var drr=[];
      let enen = data.data.map(item=>{
          if(reg.test(item.status))
          drr.push(item);
      })

      //时间格式转换
        let timeArr = data.data.map(item =>{
        let tm=item.publishTime;
        item.publishTime=tm.slice(0,10);
        
        return item.publishTime;
      })
      
        
      
      let string = this.string;
      //招聘标题
      if(this.key=="招聘标题")
      {
        let res = drr;
        var reg=new RegExp(string);
        var prr=[];
        let enen = res.map(item=>{
          if(reg.test(item.title))
          prr.push(item);
        })
      }

      else if(this.key=="发布人")
      {
        let res = drr;
        var reg=new RegExp(string);
        var prr=[];
        let enen = res.map(item=>{
          if(reg.test(item.contactName))
          prr.push(item);
        })
      }

      else if(this.key=="福利")
      {
        let res = drr;
        var reg=new RegExp(string);
        var prr=[];
        let enen = res.map(item=>{
          if(reg.test(item.welfare))
          prr.push(item);
        })
      }

      else if(this.key=="职位")
      {
        let res = drr;
        var reg=new RegExp(string);
        var prr=[];
        let enen = res.map(item=>{
          if(reg.test(item.job))
          prr.push(item);
        })
      }
      else {
        this.currentPage=1;
        let prr = drr;
      }



      this.currentPage=1;
      this.tableData=prr;
    },


    //编辑模态框发生改变
    async dialogProChange(val){
      
      this.toSeeTitle.city="";
      try {
        let res = await findCityByProvinceId({provinceId:val});
        this.provinceCityData = res.data;
      
      } catch (error) {}
    },

    //关闭模态框:打叉
    beforeClose(){
      this.$refs["ruleForm"].resetFields();
      this.editVisible=false;
    },

    //关闭模态框:取消
    toCancel(formName){
      
      this.$refs[formName].resetFields();
      this.editVisible=false;
    },

    //编辑保存
    async toSave(formName){
    //表单验证
     this.$refs[formName].validate(async(valid) => {
          if (valid) {
                // 将省份id转换为省份名字保存到数据库
                if(!isNaN(this.toSeeTitle.province)){
                  let provinceId = this.toSeeTitle.province;
                  let res1 = await findProvinceById({id:provinceId});
                  this.toSeeTitle.province = res1.data.name;
              
                }

                //将福利信息转换格式保存
                this.toSeeTitle.welfare=this.welfareData;
              
                try {
                    // 暂时删除时间戳，由于后端开发问题，传入时间戳会报400错误
                    this.$delete(this.toSeeTitle,'endTime');
                    this.$delete(this.toSeeTitle,'startTime');
                    this.$delete(this.toSeeTitle,'publishTime');
                    let res = await saveOrUpdateEmployment(this.toSeeTitle);
                    if (res.status === 200) {
                          this.findEmp();
                          this.editVisible = false;
                          config.successMsg(this, "修改成功");
                        } else {
                          config.errorMsg(this, "修改失败");
                        }
                    


                } catch (error) {
                      console.log(error);
                      config.errorMsg(this, "修改失败");}
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });


    },


    //批量删除
     toBatchDelete() {
      //获取要批量删除的id  this.ids
      let ids = this.ids;
      if (ids.length > 0) {
        this.$alert("是否删除？", "提示", {
          confirmButtonText: "删除",
          callback: action => {
            if (action === "confirm") {
              let result = [];
              ids.forEach(async id => {
                try {
                  let res = await deleteEmploymentById({id:id});
                  result.push(res.status);
                } catch (error) {
                  result.push(500);
                }
              });
              setTimeout(() => {
                // console.log(result);
                //判断是否都是200
                let resu = result.every(item => {
                  return item === 200;
                });
                if (resu) {
                  config.successMsg(this,"批量删除成功");
                } else {
                  config.errorMsg(this, "批量删除失败");
                }
                this.findEmp();
              });
            }
          }
        });
      } else {
        this.$message({
          message: "请选中要删除的数据",
          type: "warning"
        });
      }
    },

    //复选框切换(批量删除复选框)
    handleSelectionChange(val){
      console.log(val);
      let ids = val.map(item => {
        return item.id;
      });
      this.ids = ids;
    },

    handleClose(done) {
      done();
     
    },
       

    //删除
    toDelete(id){
      
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          try {         
            let res = await deleteEmploymentById({id});
            if(res.status===200){
              this.$message({
               type: 'success',
               message: '删除成功!'
              });
              this.findEmp();
              return true;
            }else{ this.$message({
            type: 'info',
            message: '删除失败!'
          });}

           
          } catch (error) {
            
            this.$message({
              type: 'info',
              message: '删除失败!'
            });
              console.log(error);
         }          

          this.$message({
            type: 'info',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    

    },

    //职位类型选择器
    async JobSelect(val){
      if(val){
          try {
          let res = await findEmploymentByJob({job:val});
          
          this.tableData=res.data;
        } catch (error) {}
      }else{this.findEmp();}
      console.log(val);
      
    },

    //换页
    huanye(val){    
      this.currentPage=val;
    },

     //编辑
    async toEdit(row){
      this.toSeeTitle={...row};
      this.editVisible=true;

      //传入商家信息
      let id = this.toSeeTitle.businessId;
      let res = await findBusinessById({id:id});
      this.businessName=res.data.name;

      //传入福利tag
      //转换福利类型，由string转为数组并添加到tag里
      let str = this.toSeeTitle.welfare;
<<<<<<< HEAD
      this.welfareData=str.split(",");
=======
      this.welfareData=str.split(",")
>>>>>>> d011a96c8cdfcb99e24a41882eef7f714eccedf8
    },


    //查看
    async toSee(row){ 

      //传入商家信息，将商家id转换为商家名称
      this.dialogVisible= true;
      this.toSeeTitle = row;
      let id = this.toSeeTitle.businessId;
      let res = await findBusinessById({id:id});
      this.businessName=res.data.name;

      //传入福利tag
      let str = this.toSeeTitle.welfare;
      this.welfareData=str.split(",")

    },

    //查找全部商家信息
    async findAllBus(){
      try {
        let res = await findAllBusiness();

        this.AllBusiness = res.data;
      } catch (error) {
        
      }
    },

    // 查找全部省份
    async findProvince(){
      try {
        let res = await findAllProvince();
        this.provinceData=res.data;
      } catch (error) {
        
      }
    },

   //查找全部招聘信息
    async findEmp(){

      //直接调用接口查找全部信息
      try {

        //过滤掉招聘结束的
        let res = await findAllEmployment();
        var reg=new RegExp("招聘中");
        var prr=[];
        let enen = res.data.map(item=>{
          if(reg.test(item.status))
          prr.push(item);
        })
        
        this.tableData=prr;


        //获取职位类型并去重，加入到职位分类选项里
        let jobArr = res.data.map(item => {
          
          return item.job;
        });
        //去重
        this.jobData = [...new Set(jobArr)];


 


        //时间格式转换
          let timeArr = res.data.map(item =>{
          let tm=item.publishTime;
          item.publishTime=tm.slice(0,10);
          return item.publishTime;
        })

        
        
      } catch (error) {
        config.errorMsg(this,'查找错误');
        console.log(error);
      }
    },

  },
  created() {
    this.findEmp();
    this.findProvince();
    this.findAllBus();
  },
  mounted() {}
};
</script>


<style scoped>
/*---------------------------------------------------------通用样式------------------------------------------------------------------*/
#recruitDoing{
  height: 100%;  
}

.BtnContainer{
  width: 100%; 
  height: 50px;
}

.jobDropDownBox{ 
  width: 150px;
  float: left; 
}

.SearchBox{ 
  float: right;
}

.searchSelect{
  width:120px
}

.input-with-select{
  width: 340px;
}

.formContainer{
  margin-top: 20px;
  height: 455px;
}

.PageChange{
  float: right;
}


/* （模态框查看） */
.Flour{
  margin-bottom: 10px;
}


.oneFlour{
  height: 54px;

}

.oneFlourLeft{
  width:60%;
  float:left;

}

.oneFlourLeft>*{
  margin: 7.5px;
}

.oneFlourRight{
  text-align: center;
  color: coral;
  width:40%;
  float:right;
 
}

.tagBox{
}

/* (模态框编辑) */

{
  
  background-color: aquamarine;
}

.btnBox{
  text-align: center;
}

.btnBox{
  text-align: center;
}

.editbutton{
  
  margin: 10px;
}



/*------------------------------------------------------------平板样式 ---------------------------------------------------------------*/



/*-----------------------------------------------------------手机样式--------------------------------------------------------------- */
@media screen and (max-width: 500px){

  .SearchBox{
    width: 55%;
  }

  .jobDropDownBox{
    width: 35%;
  }

  .searchSelect{
  width:40px
  }
  
  .input-with-select{
  width: 200px;
  }

  /* 模态框查看 */
.el-dialog__wrapper[data-v-4e21bdfe] {
position: fixed;
    top: 0%;
    left: -204px;
    bottom: 0;
    overflow: auto;
    margin: 0;
    width: 767px;
}

.editBox{
  top:-200;
}


}


</style>