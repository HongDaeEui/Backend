module.exports = {
  memberList: `select * from love`,
  memberrInsert: `insert into love(love_id, love_name) set ?`,
  memberUpdate: `update love set ? where id=?`,
  memberDelete: `delete from love where id=?`,
};
