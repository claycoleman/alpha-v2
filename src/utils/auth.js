import {
  MENTOR_AUTH_KEY,
  STUDENT_AUTH_KEY,
  INCORRECT_CODE_COUNT_KEY,
  USER_AUTH_KEY,
} from './local-constants';

export function authenticateUser() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  sessionStorage.setItem(USER_AUTH_KEY, 'true');
}

export function unauthenticateUser() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  sessionStorage.removeItem(USER_AUTH_KEY);
}

export function isAuthenticatedUser() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  return sessionStorage.getItem(USER_AUTH_KEY);
}

export function authenticateMentor() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  sessionStorage.setItem(MENTOR_AUTH_KEY, 'true');
}

export function unauthenticateMentor() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  sessionStorage.removeItem(MENTOR_AUTH_KEY);
}

export function isAuthenticatedMentor() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  return sessionStorage.getItem(MENTOR_AUTH_KEY);
}

export function authenticateStudent() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  sessionStorage.setItem(STUDENT_AUTH_KEY, 'true');
}

export function unauthenticateStudent() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  sessionStorage.removeItem(STUDENT_AUTH_KEY);
}

export function isAuthenticatedStudent() {
  if (typeof sessionStorage === `undefined`) {
    return false;
  }
  return sessionStorage.getItem(STUDENT_AUTH_KEY);
}

// TODO if we really want to make it secure... prevent people from accessing this for a day or something after
// this count gets high enough
export function incrementBadCodeCount() {
  if (typeof localStorage === `undefined`) {
    return 0;
  }
  const badCount = parseInt(localStorage.getItem(INCORRECT_CODE_COUNT_KEY) || 0) + 1;
  localStorage.setItem(INCORRECT_CODE_COUNT_KEY, badCount);
  return badCount;
}

export function getBadCodeCount() {
  if (typeof localStorage === `undefined`) {
    return 0;
  }
  return localStorage.getItem(INCORRECT_CODE_COUNT_KEY);
}
