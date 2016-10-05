import { configure } from '@kadira/storybook';
import 'tachyons'
import '../src/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
