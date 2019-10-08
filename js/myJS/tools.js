function RawToHtDataForm(pressTimeArray, releaseTimeArray) {
    let result = [];
    for (let i = 0; i < pressTimeArray.length; i++) {
        let line = {};
        line.data = [];
        line.name = "次数" + (i + 1);
        let pressObject = pressTimeArray[i];
        let releaseObject = releaseTimeArray[i];
        for (let j = 0; j < pressTimeArray[i].length; j++) {
            line.data.push(releaseObject[j] - pressObject[j]);
        }
        result.push(line);
    }
    return result;
}

function RawToFtDataForm(pressTimeArray) {
    let result = [];
    for (let i = 0; i < pressTimeArray.length; i++) {
        let line = {};
        line.data = [];
        line.name = "次数" + (i + 1);
        let pressObject = pressTimeArray[i];
        for (let j = 1; j < pressTimeArray[i].length; j++) {
            line.data.push(pressObject[j] - pressObject[j - 1]);
        }
        result.push(line);
    }
    return result;
}

function FeatureToHtdataForm(loginFeature, claimFeature) {
    let result = [];
    let tempLine = {};
    tempLine.data = loginFeature.holdTimeList;
    tempLine.name = "登录";
    tempLine.color = '#e10808';
    result.push(tempLine);
    for (let i = 0; i < claimFeature.rawHoldTimeList.length; i++) {
        let line = {};
        line.data = claimFeature.rawHoldTimeList[i];
        line.name = "注册"+(i+1);
        line.color = '#13e10d';
        result.push(line)
    }
    return result;
}

function FeatureToFtdataForm(loginFeature, claimFeature) {
    let result = [];
    let tempLine = {};
    tempLine.data = loginFeature.ppFlightTimeList;
    tempLine.name = "登录";
    tempLine.color = '#e10808';
    result.push(tempLine);
    for (let i = 0; i < claimFeature.rawPPFlightTimeList.length; i++) {
        let line = {};
        line.data = claimFeature.rawPPFlightTimeList[i];
        line.name = "注册"+(i+1);
        line.color = '#13e10d';
        result.push(line)
    }
    return result;
}