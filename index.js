var ddb = require('dynamodb').ddb({ accessKeyId: 'AKIAINJUFZJBSFMCTDEA',
                                      secretAccessKey: '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' });

ddb.describeTable('IotCognitoTable', function(err, res) {
  if(err)
  console.log(err);
  else {
    console.log('DescribeTable:');
    console.log(res);
  }
});

var item1 = {
              timestamp : Date.now(),
              usr: 'kona',
              'sensor-id': 'sensor-1',
              Values: (Math.random() * 30) + 60,
              date: Date.now()
              };

// Simple

ddb.putItem('IotCognitoTable', item1, {}, function(err, res, cap) {
    if(err)
      console.log(err);
    else {
      console.log('PutItem: ' + cap);
      console.log(res);
    }
  });

  var options = { limit: 100,
                attributesToGet: ['sensor-id', 'Values'],
                filter : { timestamp: { ge: 143685023123 } } };

               ddb.scan('IotCognitoTable', options, function(err, res) {
                  if(err) {
                    console.log(err);
                  } else {
                    console.log(res);
                  }
                });


              var options = { count:true };

              ddb.scan('IotCognitoTable', options, function(err, res) {
                  if(err) {
                    console.log(err);
                  } else {
                    console.log(res);
                  }
                });


return;
              var options = { filter : { timestamp: { null: true } } };

              ddb.scan('IotCognitoTable', options, function(err, res) {
                  if(err) {
                    console.log(err);
                  } else {
                    console.log(res);
                  }
                });
