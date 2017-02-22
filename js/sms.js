/**
 * Created by Administrator on 2017/2/20.
 */
var wait = 60;
function trim(str) {
    return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
}

function getverifycode1(field_id, field_name) {
    var mobile = trim(document.getElementById(field_id).value);
    var sms_code_login = $('#sms_code_login').val();
    if(mobile == '') {
        alert("- "+field_name+" 不能为空！");
        $(field_id).focus();
        return;
    }
    Ajax.call('http://www.leishen.cn/sms.php?step=getverifycode&r=' + Math.random(), 'mobile=' + mobile+'&sms_code_login=' + sms_code_login, getverifycode1Response, 'POST', 'JSON');
}
function getverifycode11(field_id, field_name) {
    var mobile = trim(document.getElementById(field_id).value);
    if(mobile == '') {
        alert("- "+field_name+" 不能为空！");
        $(field_id).focus();
        return;
    }
    Ajax.call('http://www.leishen.cn/sms.php?step=getverifycode11&r=' + Math.random(), 'mobile=' + mobile, getverifycode1Response, 'POST', 'JSON');
}

function getverifycode4(field_id, field_name) {
    var mobile = trim(document.getElementById(field_id).value);
    if(mobile == '') {
        alert("- "+field_name+" 不能为空！");
        $(field_id).focus();
        return;
    }
    $.ajax({
        url:'../user.php?act=find_phone',
        data:{mobile:mobile},
        dataType:'json',
        type:'post',
        success:function(data){
            if(data==1){
                alert("手机号已被注册绑定，请换一个重试！");
                return;
            }else{
                Ajax.call('http://www.leishen.cn/sms.php?step=getverifycode4&r=' + Math.random(), 'mobile=' + mobile, getverifycode1Response, 'POST', 'JSON');
            }
        }
    })

}
function getverifycodemobile(field_id, field_name) {
    var mobile = trim(document.getElementById(field_id).value);
    if(mobile == '') {
        alert("- "+field_name+" 不能为空！");
        $(field_id).focus();
        return;
    }
    Ajax.call('http://www.leishen.cn/sms.php?step=getverifycodemobile&r=' + Math.random(), 'mobile=' + mobile, getverifycode1Response, 'POST', 'JSON');
}

function getverifycode2() {
    var mobile = trim(document.getElementById("mobile").value);
    if(mobile == '') {
        alert("手机号不能为空！");
        $("mobile").focus();
        return;
    }
    Ajax.call('http://www.leishen.cn/sms.php?step=getverifycode2&r=' + Math.random(), 'mobile=' + mobile, getverifycode2Response, 'POST', 'JSON');
}

function getverifycode1Response(result) {
    if(result.error == 0) {
        time();
    } else if(result.error > 0) {
        alert(result.message);
    }
}

function time() {
    o = document.getElementById('btn');
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.style.backgroundColor = 'red';
        o.value = "获取验证码";
        wait = 180;
    } else {
        o.setAttribute("disabled", true);
        o.style.backgroundColor = 'gray';
        o.value = wait + "秒重发";
        wait--;
        setTimeout(function() {
                time(o)
            },
            1000)
    }
}

function getverifycode2Response(result) {
    alert(result.message);
}
function getverifycode3(field_id, field_name) {
    var mobile = trim(document.getElementById(field_id).value);
    if(mobile == '') {
        alert("- "+field_name+" 不能为空！");
        $(field_id).focus();
        return;
    }
    Ajax.call('http://www.leishen.cn/sms_mpwd.php?step=getverifycode3&r=' + Math.random(), 'mobile=' + mobile, getverifycode3Response, 'POST', 'JSON');
}
function getverifycode3Response(result) {
    if(result.error != 7) {
        time2();
    }
    alert(result.message);

}
function time2() {
    o = document.getElementById('btns');
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.style.backgroundColor = 'red';
        o.value = "获取验证码";
        wait = 180;
    } else {
        o.setAttribute("disabled", true);
        o.style.backgroundColor = 'gray';
        o.value = wait + "秒重发";
        wait--;
        setTimeout(function() {
                time2(o)
            },
            1000)
    }
}