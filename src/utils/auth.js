import { MENTOR_AUTH_KEY, STUDENT_AUTH_KEY } from "./constants";

export function authenticateMentor() {
  localStorage.setItem(MENTOR_AUTH_KEY, 'true');
}

export function isAuthenticatedMentor() {
  return localStorage.getItem(MENTOR_AUTH_KEY);
}

export function authenticateStudent() {
  localStorage.setItem(STUDENT_AUTH_KEY, 'true');
}

export function isAuthenticatedStudent() {
  return localStorage.getItem(STUDENT_AUTH_KEY);
}
