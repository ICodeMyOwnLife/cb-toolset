declare module 'rollup-plugin-filesize' {
  import {Plugin} from 'rollup';
  const filesize: () => Plugin;
  export default filesize;
}
