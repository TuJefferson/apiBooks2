var server = require('../../server');
var ds = server.dataSources.mysqlApi;

var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'book'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});