import { _getQuestions, _getUsers, _saveUser } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveUser(info) {
  return _saveUser(info);
}
