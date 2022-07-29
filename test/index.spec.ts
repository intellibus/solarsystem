import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Solar System Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'solarsystem');
});

export const { run } = test;
