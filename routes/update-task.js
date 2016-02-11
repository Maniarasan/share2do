'use strict';

var Task = require('../models/task');
var data = {
  objectId: '56bb251e9243f208117a5ecb'
};



// var updatetask = function (req, res) {
//   Task.find(data, function (err, result) {
//     if (err) { console.log(result); }

//     result.objectId = '6bb251e9243f208117a';
//     result.save(function (err) {
//         if (!err) {
//             res.json("updated");
//         }
//     });
//     res.json('your data updated');
//   });
// };

/*var updatetask = function (req, res) {
    Task.update({_id: '56bc11b0d30e870c04057aa2'}, function (err) {
        if (!err) {
            res.json("updated");
        }
    });
};
// */
// var updatetask;
// module.exports = updatetask;

