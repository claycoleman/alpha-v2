import { MENTOR_AUTH_KEY, STUDENT_AUTH_KEY, INCORRECT_CODE_COUNT_KEY, USER_AUTH_KEY } from "./local-constants";

export function authenticateUser() {
  sessionStorage.setItem(USER_AUTH_KEY, 'true');
}

export function unauthenticateUser() {
  sessionStorage.removeItem(USER_AUTH_KEY);
}

export function isAuthenticatedUser() {
  return sessionStorage.getItem(USER_AUTH_KEY);
}

export function authenticateMentor() {
  sessionStorage.setItem(MENTOR_AUTH_KEY, 'true');
}

export function unauthenticateMentor() {
  sessionStorage.removeItem(MENTOR_AUTH_KEY);
}

export function isAuthenticatedMentor() {
  return sessionStorage.getItem(MENTOR_AUTH_KEY);
}

export function authenticateStudent() {
  sessionStorage.setItem(STUDENT_AUTH_KEY, 'true');
}

export function unauthenticateStudent() {
  sessionStorage.removeItem(STUDENT_AUTH_KEY);
}

export function isAuthenticatedStudent() {
  return sessionStorage.getItem(STUDENT_AUTH_KEY);
}

// TODO if we really want to make it secure... prevent people from accessing this for a day or something after 
// this count gets high enough
export function incrementBadCodeCount() {
  const badCount = parseInt(localStorage.getItem(INCORRECT_CODE_COUNT_KEY) || 0) + 1;
  localStorage.setItem(INCORRECT_CODE_COUNT_KEY, badCount);
  return badCount;
}

export function getBadCodeCount() {
  return localStorage.getItem(INCORRECT_CODE_COUNT_KEY);
}
