/**
 * Created by ying.wu on 2017/6/27.
 */
const ecpay_logistics = require('../lib/ecpay_logistics.js');
// 參數值為[PLEASE MODIFY]者，請在每次測試時給予獨特值
/*
let base_param = {
	MerchantTradeNo:"", // 請帶20碼uid, ex: f0a0d7e9fae1bb72bc93, 為aiocheckout時所產生的
	MerchantTradeDate:"2018/03/09 11:00:45", // 請帶交易時間, ex: 2017/05/17 16:23:45, 為aiocheckout時所產生的
	LogisticsType:"CVS",
	LogisticsSubType:"UNIMART",//UNIMART、FAMI、HILIFE、UNIMARTC2C、FAMIC2C、HILIFEC2C
	GoodsAmount:"200",
	CollectionAmount:"",
	IsCollection:"",
	GoodsName:"test",
	SenderName:"綠界科技",
	SenderPhone:"",
	SenderCellPhone:"0912345678",
	ReceiverName:"綠界科技",
	ReceiverPhone:"0229768888",
	ReceiverCellPhone:"0912345678",
	ReceiverEmail:"",
	TradeDesc:"",
	ServerReplyURL:"http://192.168.0.1/ReceiverServerReply", // 物流狀況會通知到此URL
	ClientReplyURL:"",
	LogisticsC2CReplyURL:"",
	Remark:"",
	PlatformID:"",
	ReceiverStoreID:"991182", // 請帶收件人門市代號(統一):991182  測試商店代號(全家):001779 測試商店代號(萊爾富):2001、F227
	ReturnStoreID:""
};
*/

let base_param = {
    MerchantTradeNo: 'f1a0d7e9fae1bb72bc93',
  MerchantTradeDate: '2018/07/24 15:37:10',
  LogisticsType: 'CVS',
  LogisticsSubType: 'UNIMART',
  GoodsAmount: '200',
  CollectionAmount: '',
  IsCollection: 'N',
  GoodsName: '',
  SenderName: '黃奕翔',
  SenderPhone: '',
  SenderCellPhone: '0911399185',
  ReceiverName: '黃奕翔',
  ReceiverPhone: '0911399185',
  ReceiverCellPhone: '0911399185',
  ReceiverEmail: '',
  TradeDesc: '',
  ServerReplyURL: 'http://localhost:1234',
  ClientReplyURL: '',
  LogisticsC2CReplyURL: '',
  Remark: '',
  PlatformID: '',
  ReceiverStoreID: '991182',
  ReturnStoreID: '',
  MerchantID: '2000132',
}

let create = new ecpay_logistics();
let res = create.create_client.create(parameters = base_param);
if (typeof res === 'string'){
    console.log('------- 1')
    console.log(res);
} else {
    res.then(function (result) {
    console.log('------- 2')
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    });
}
