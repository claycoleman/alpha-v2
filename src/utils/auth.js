import { MENTOR_AUTH_KEY, STUDENT_AUTH_KEY } from "./constants";

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
