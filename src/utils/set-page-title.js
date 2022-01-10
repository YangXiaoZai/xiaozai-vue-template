import { title } from '../settings';

export default function setPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} | ${title}`;
  }
  return title;
}
