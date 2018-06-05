var phoneData = {
  phoneArray: [
    {
      type: "畅享8e",
      screen: "5.7英寸",
      cameraFront: "500万像素 + 智能柔光灯",
      cameraBack: "1300万 + 200万像素",
      batery: "3000mAh",
      cpu: "高通430",
      ram: "3G + 32G"
    }, {
      type: "畅享8",
      screen: "5.99英寸",
      cameraFront: "800万像素 + 智能柔光灯",
      cameraBack: "1300万 + 200万像素",
      batery: "3000mAh",
      cpu: "高通430",
      ram: "3G + 32G, 4G + 64G"
    }, {
      type: "畅享8 Plus",
      screen: "5.93英寸",
      cameraFront: "1600万 + 200万像素",
      cameraBack: "1300万 + 200万像素",
      batery: "4000mAh",
      cpu: "麒麟659",
      ram: "4G + 64G, 4G + 128G"
    }, {
      type: "Nova 3e",
      screen: "5.84英寸",
      cameraFront: "2400万像素",
      cameraBack: "1600万 + 200万像素",
      batery: "3000mAh",
      cpu: "麒麟659",
      ram: "4G + 64G, 4G + 128G"
    }, {
      type: "Nova 2S",
      screen: "5.99英寸",
      cameraFront: "2000万 + 200万像素",
      cameraBack: "2000万像素黑白 + 1600万像素彩色",
      batery: "3340mAh",
      cpu: "麒麟960",
      ram: "4G + 64G, 6G + 64G, 6G + 128G"
    }, {
      type: "Mate10",
      screen: "5.9英寸",
      cameraFront: "800万像素",
      cameraBack: "2000万像素黑白 + 1200万像素彩色",
      batery: "4000mAh",
      cpu: "麒麟970",
      ram: "4G + 64G, 6G + 128G"
    }, {
      type: "Mate10 Pro",
      screen: "6英寸",
      cameraFront: "800万像素",
      cameraBack: "2000万像素黑白 + 1200万像素彩色",
      batery: "4000mAh",
      cpu: "麒麟970",
      ram: "6G + 64G, 6G + 128G"
    }, {
      type: "P20",
      screen: "5.8英寸",
      cameraFront: "2400万像素",
      cameraBack: "2000万像素黑白 + 1200万像素彩色",
      batery: "3400mAh",
      cpu: "麒麟970",
      ram: "6G + 64G, 6G + 128G"
    }, {
      type: "P20 Pro",
      screen: "6.1英寸",
      cameraFront: "2400万像素",
      cameraBack: "800万像素长焦 + 4000万像素彩色 + 2000万像素黑白",
      batery: "4000mAh",
      cpu: "麒麟970",
      ram: "6G + 64G, 6G + 128G, 6G + 256G"
    }
  ]
};

var phoneMap = {
  "畅享8e": 0,
  "畅享8": 1,
  "畅享8 Plus": 2,
  "Nova 3e": 3,
  "Nova 2S": 4,
  "Mate10": 5,
  "Mate10 Pro": 6, 
  "P20": 7,
  "P20 Pro": 8
};

var trieData = {
  "content":"root",
  "result":false,
  "son":[
    {
      "content":"c",
      "result":false,
      "son":[
        {
          "content":"畅想",
          "result":false,
          "son":[
            {
              "content":"畅享8",
              "result":true,
              "realContent":"畅享8",
              "son":[
                {
                  "content":"畅享8e",
                  "result": true,
                  "realContent": "畅享8e",
                  "son":[]
                },
                {
                  "content":"畅享8plus",
                  "result": true,
                  "realContent": "畅享8 Plus",
                  "son":[]
                }
              ]
            },
            {
              "content":"畅享7s",
              "result": true,
              "realContent": "畅享7s",
              "son":[]
            }
          ]
        }
      ]
    },
    {
      "content":"n",
      "result":false,
      "son":[
        {
          "content":"nova",
          "result":false,
          "son":[
            {
              "content": "nova2s",
              "result": true,
              "realContent": "Nova 2S",
              "son":[]
            },
            {
              "content":"nova3e",
              "result": true,
              "realContent": "Nova 3e",
              "son":[]
            }
          ]
        }
      ]
    },
    {
      "content":"m",
      "result":false,
      "son":[
        {
          "content":"麦芒6",
          "result": true,
          "realContent": "麦芒6",
          "son":[]
        },
        {
          "content":"mate",
          "result":false,
          "son":[
            {
              "content":"mate9",
              "result": true,
              "realContent": "Mate9",
              "son":[
                {
                  "content":"mate9 pro",
                  "result": true,
                  "realContent": "Mate9 Pro",
                  "son":[]
                }
              ]
            },
            {
              "content":"mate10",
              "result": true,
              "realContent": "Mate10",
              "son":[
                {
                  "content":"mate10 pro",
                  "result": true,
                  "realContent": "Mate10 Pro",
                  "son":[]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "content":"p",
      "result":false,
      "son":[
        {
          "content":"p10",
          "result": true,
          "realContent": "P10",
          "son":[
            {
              "content":"p10plus",
              "result": true,
              "realContent": "P10 Plus",
              "son":[]
            }
          ]
        },
        {
          "content":"p20",
          "result": true,
          "realContent": "P20",
          "son":[
            {
              "content": "p20pro",
              "realContent": "P20 Pro",
              "result":true,
              "son":[]
            }
          ]
        }
      ]
    }
  ]
}


var shorteningFullMap = {
  "c": "畅享",
  "ch": "畅享",
  "cha": "畅享",
  "chan": "畅享",
  "chang": "畅享",
  "changx": "畅享",
  "changxi": "畅享",
  "changxia": "畅享",
  "changxian": "畅享",
  "changxiang": "畅享",
  "cx": "畅享",
  "chx": "畅享",
  "m": "Mate",
  "ma": "Mate",
  "mat": "Mate",
  "mate": "Mate",
  "n": "Nova",
  "no": "Nova",
  "nov": "Nova",
  "nova": "Nova",
  "p": "P"
}

var seriesRecommendMap = {
  "畅享": ["7S","8e","8","8 Plus"],
  "Nova": [" 2S", " 3e"],
  "Mate": ["9", "9 Pro", "10", "10 Pro"],
  "P": ["10", "10 Plus", "20", "20 Pro"]
}

var typeNumMap = {
  "7S" : "7",
  "8e" : "8",
  "8" : "8",
  "8 Plus" : "8",
  " 2S" : "2",
  " 3e" : "3",
  "9" : "9",
  "9 Pro" : "9",
  "10": "10",
  "10 Pro": "10",
  "10 Plus": "10",
  "20": "20",
  "20 Pro": "20"
}

var numRecommendMap = {
  "2": [
    {
      "series": "Nova",
      "type": " 2S"
    }
  ],
  "3": [
    {
      "series": "Nova",
      "type": " 3e"
    }
  ],
  "7": [
    {
      "series":"畅享",
      "type":"7s"
    }
  ],
  "8": [
    {
      "series": "畅享",
      "type": "8e"
    },{
      "series": "畅享",
      "type": "8"
    }, {
      "series": "畅享",
      "type": "8 Plus"
    }
  ],
  "9": [
    {
      "series": "P",
      "type": "9"
    }, {
      "series": "P",
      "type": "9 Plus"
    }, {
      "series": "Mate",
      "type": "9"
    }, {
      "series": "Mate",
      "type": "9 Pro"
    }
  ],
  "10": [
    {
      "series": "P",
      "type": "10"
    }, {
      "series": "P",
      "type": "10 Plus"
    }, {
      "series": "Mate",
      "type": "10"
    }, {
      "series": "Mate",
      "type": "10 Pro"
    }
  ],
  "20": [
    {
      "series": "P",
      "type": "20"
    }, {
      "series": "P",
      "type": "20 Pro"
    }
  ]
}

module.exports = {
  phoneMap: phoneMap,
  phoneData: phoneData,
  shorteningFullMap: shorteningFullMap,
  seriesRecommendMap: seriesRecommendMap,
  numRecommendMap: numRecommendMap,
  typeNumMap: typeNumMap
}