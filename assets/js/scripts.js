var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    ios = /iphone|ipod|ipad/.test(userAgent);

if (ios) {
    document.getElementById('myLink').href = 'sms:999&body=Q6';

} else {
    document.getElementById('myLink').href = 'sms:999?body=Q6';
};