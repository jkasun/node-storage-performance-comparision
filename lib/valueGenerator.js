module.exports = function () {
    let generateData = (numberOfRecords = 5000) => {
        var data = [];

        for(var i = 0; i < numberOfRecords; i++) {
            data.push({
                key: 'key' + i,
                value: '{"persistData":{},"recentExgs":[],"globalArgs":{"exg":"TDWL"},"defaultWS":{"mainPanel":{"2":{"tab":{"1":{"w":{"1":{"1":{"marketWatchListColumnIds":{"classicIds":["menu","sym","sDes","symTrend","ltp","ltq","lstTrends","chg","pctChg","cashMap","vol","bbp","bbq","bap","baq","trades","ltd","dltt","top","tov","open","high","low","sppr","spprPct","perSpreadMap","rnpr","rnprPct","pctRngMap","bor","borMap","per52WkRng","perTodayRng","pctChgMap"],"defaultIds":["menu","sym","symTrend","ltp","lstTrends","chg","bbp","bap","l52","vol","tovr","trades","prvCls","cashMap","dltt","high"],"classicAssetIds":{"0":["menu","sym","sDes","symTrend","ltp","ltq","chg","pctChg","bbp","bbq","bap","baq","vol","tovr","trades","h52","l52","prvCls","open","cit","ltd","dltt","high","low"],"7":["menu","sym","lDes","symTrend","ltp","chg","pctChg","high","low","vol","tovr","trades","h52","l52","prvCls","open"],"11":["menu","sym","sDes","symTrend","ltp","ltq","chg","pctChg","bbp","bbq","bap","baq","vol","tovr","trades","high","low"],"65":["menu","sym","lDes","symTrend","ltp","ltq","chg","pctChg","bbp","bbq","bap","baq","vol","tovr","trades","prvCls","open","high","low"],"68":["menu","sym","sDes","symTrend","ltp","ltq","chg","pctChg","bbp","bbq","bap","baq","vol","tovr","trades","high","low"],"75":["menu","sym","lDes","symTrend","ltp","ltq","chg","pctChg","bbp","bbq","bap","baq","vol","tovr","trades","prvCls","open","high","low"],"86":["menu","sym","sDes","symTrend","ltp","ltq","chg","pctChg","bbp","bbq","bap","baq","vol","tovr","trades","high","low"],"undefined":["menu","sym","sDes","symTrend","ltp","ltq","lstTrends","chg","pctChg","cashMap","vol","bbp","bbq","bap","baq","trades","ltd","dltt","top","tov","open","high","low","sppr","spprPct","perSpreadMap","rnpr","rnprPct","pctRngMap","bor","borMap","per52WkRng","perTodayRng","pctChgMap"]},"defaultAssetIds":{"0":["menu","sym","symTrend","ltp","chg","bbp","bap","l52","vol","tovr","trades","prvCls","cit","dltt","high"],"7":["menu","sym","symTrend","ltp","chg","high","vol","tovr","trades","l52","prvCls"],"11":["menu","sym","symTrend","ltp","chg","bbp","bap","vol","tovr","trades","high"],"68":["menu","sym","symTrend","ltp","chg","bbp","bap","vol","tovr","trades","high"],"75":["menu","sym","symTrend","ltp","chg","bbp","bap","vol","tovr","trades","prvCls","high"],"86":["menu","sym","symTrend","ltp","chg","bbp","bap","vol","tovr","trades","high"],"undefined":["menu","sym","symTrend","ltp","lstTrends","chg","bbp","bap","l52","vol","tovr","trades","prvCls","cashMap","dltt","high"]}}}}}}}}}},"lastInnerWidget":{"2":{"1":{"1":1}}},"lastArgs":{"2":{"sym":"1060","exg":"TDWL","inst":0}}}'
            })
        }

        return data;
    };

    let getKeys = () => {
        var keys = [];

        for(let i = 100; i < 4900; i++) {
            keys.push('key' + i);
        }

        return keys;
    };
    
    return {
        generateData,
        getKeys
    }
}();