import { title } from '../setting';

export default function setPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} | ${title}`;
  }
  return title;
}
