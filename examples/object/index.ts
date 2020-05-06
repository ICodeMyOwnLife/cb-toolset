import { CreateRecordOf, recordCreator } from '../../src/object';

/**
 * CreateRecordOf<TValue>
 */
interface RouteInfo {
  name: string;
  path: string;
}

const createRoutes: CreateRecordOf<RouteInfo> = styles => styles;

const routes = createRoutes({
  home: { name: 'Home', path: '/home' },
  about: { name: 'About', path: '/about' },
  contact: { name: 'Contact', path: '/contact' },
});

console.log(routes.home, routes.about.name, routes.contact.path);

interface Styles {
  color?: string;
  backgroundColor?: string;
}

const createStyles = recordCreator<Styles>();

const styles = createStyles({
  root: { backgroundColor: '#ffffff' },
  card: { color: '#ffaaaa' },
  table: { backgroundColor: '#ededed', color: '#ffaa22' },
});

console.log(styles.root, styles.card.backgroundColor, styles.table.color);
