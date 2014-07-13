// automatically generated code

dpd.collections = dpd("/collections");
dpd.collections.on = function(ev, fn) {
  return dpd.on("collections" + ":" + ev, fn);
}
dpd.collections.once = function(ev, fn) {
  return dpd.once("collections" + ":" + ev, fn);
}
dpd.collections.off = function(ev, fn) {
  return dpd.off("collections" + ":" + ev, fn);
}
dpd.collections.rename = function (path, body, fn) {
  dpd.collections.exec("rename", path, body, fn);
}

dpd.users = dpd("/users");
dpd.users.login = function(path, body, fn) {
  return dpd.users.exec("login", path, body, fn);
}
dpd.users.logout = function(path, body, fn) {
  return dpd.users.exec("logout", path, body, fn);
}
dpd.users.me = function(path, query, fn) {
  return dpd.users.get("me", path, query, fn);
}
dpd.users.on = function(ev, fn) {
  return dpd.on("users" + ":" + ev, fn);
}
dpd.users.once = function(ev, fn) {
  return dpd.once("users" + ":" + ev, fn);
}
dpd.users.off = function(ev, fn) {
  return dpd.off("users" + ":" + ev, fn);
}
