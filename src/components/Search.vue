<template>
	<el-tabs v-model="activeName" @tab-click="handleClick" class="full">
		<el-tab-pane label="事例検索" name="first">
			フリーワード
			<el-autocomplete
				v-model="state"
				:fetch-suggestions="querySearchAsync"
				placeholder="フリーワード検索"
				@select="handleSelect"
			></el-autocomplete
			><br />

			<div class="block">
				<span class="demonstration">期間（報告日）</span>
				<el-date-picker
					v-model="value2"
					type="date"
					placeholder="选择日期"
					:disabled-date="disabledDate"
					:shortcuts="shortcuts"
				>
				</el-date-picker>
			</div>

			<div class="youshi">
				<span>様式 </span>
				<el-select v-model="value3" placeholder="全様式">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>

			<div class="shisetsu">
				<span>施設 </span>
				<el-select v-model="value4" placeholder="グループ施設のみ">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>

			<el-button type="primary" icon="el-icon-search">搜索</el-button>

			<div>
				检索结果：0件 <button>検索結果ダウンロード</button>

				<div class="block" style="text-align: center">
					<!-- <span class="demonstration">直接前往</span> -->
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						v-model:currentPage="currentPage3"
						:page-size="100"
						layout="prev, pager, next, jumper"
						:total="1000"
					>
					</el-pagination>
				</div>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column prop="date" label="様式" width="180"> </el-table-column>
					<el-table-column prop="name" label="報告日" width="180"> </el-table-column>
					<el-table-column prop="yaku" label="被疑薬"> </el-table-column>
					<el-table-column prop="fuku" label="副作用名"> </el-table-column>
					<el-table-column prop="address" label="年齢"> </el-table-column>
					<el-table-column prop="address" label="性別"> </el-table-column>
					<el-table-column prop="address" label="治療中の疾患"> </el-table-column>
					<el-table-column prop="address" label="内容"> </el-table-column>
					<el-table-column prop="address" label="投稿者"> </el-table-column>
				</el-table>
			</div>
		</el-tab-pane>
		<el-tab-pane label="事例登録" name="second">後で入れる</el-tab-pane>
		<el-tab-pane label="一時保存" name="third">後で入れる</el-tab-pane>
		<el-tab-pane label="事例管理" name="fourth">後で入れる</el-tab-pane>
		<el-tab-pane label="入出力" name="five">後で入れる</el-tab-pane>
	</el-tabs>
</template>

<script>
export default {
	data() {
		return {
			activeName: "first",
			disabledDate(time) {
				return time.getTime() > Date.now();
			},
			shortcuts: [
				{
					text: "Today",
					value: new Date()
				},
				{
					text: "Yesterday",
					value: (() => {
						const date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24);
						return date;
					})()
				},
				{
					text: "A week ago",
					value: (() => {
						const date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
						return date;
					})()
				}
			],
			value1: "",
			value2: "",

			options: [
				{
					value: "选项1",
					label: "全様式"
				},
				{
					value: "选项2",
					label: "様式1"
				},
				{
					value: "选项3",
					label: "様式2"
				},
				{
					value: "选项4",
					label: "様式3"
				}
			],
			value3: "全様式",
			value4: "全体",

			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄"
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄"
				}
			],

			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},

		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	}
};
</script>

<style>
.full {
	background-color:red;
    width: 100%;


}



</style>
