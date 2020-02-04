let type = 'dev'
let url = {
    dev: 'https://zhuanti.qa.chebada.com/activityapi/Handler/',
    production: 'https://zhuanti.chebada.com/activityapi/Handler/',
    t: 'https://zhuanti.t.chebada.com/activityapi/Handler/',
    local: ''
}
let isCBD = navigator.userAgent.indexOf("chebada") != -1;

/**
 * 公用ajax组件
 * param为请求参数body,没有则传{};
 * handler接口名;
 * serviceName服务名;
 * Created by wusk on 19/12/13.
 */
function sendRequest(param, handler, serviceName) {
    let postUrl = url[type] + handler
    return new Promise((resolve, reject) => {
        $.ajax({
            dataType: 'json',
            url: postUrl,
            type: 'post',
            timeout: '8000',
            data: JSON.stringify({
                header: {
                    "serviceName": serviceName
                },
                body: param
            }),
            beforeSend: function () {
                cbdztUtil.Toast.showLoading()
            },
            success: function (res) {
                cbdztUtil.Toast.hideLoading()
                resolve(res)
            },
            error: function (error) {
                cbdztUtil.Toast.hideLoading()
                reject(error)
            }
        })
    })
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    } else {
        return null;
    }
}

function isIOS() {
    if (isCBD) {
        bridge.userInfoPlugins.getSystemInfo().then(res => {
            var ios = res.clientInfo.osType;
            if (ios === "ios") {
                return true
            }
        });
    }
    return false
}

export {sendRequest,getUrlParam,isIOS}