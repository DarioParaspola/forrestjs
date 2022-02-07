const pause = require('@marcopeg/utils/lib/pause');
const { resetState } = require('../src/state');
const { createAction } = require('../src/create-action');
const { registerExtension } = require('../src/register-extension');

describe('hooks/serie', () => {
  beforeEach(resetState);

  it('should run parallel hooks', async () => {
    const handler = jest.fn();
    registerExtension({
      action: 'foo',
      handler: async () => {
        await pause();
        handler();
      },
    });
    await createAction('foo', { mode: 'parallel' });
    expect(handler.mock.calls.length).toBe(1);
  });

  it('should run parallel hooks with helper', async () => {
    const spy = jest.fn();
    const handler = async () => {
      await pause();
      spy();
    };

    registerExtension({
      action: 'foo',
      handler,
    });
    registerExtension(['foo', handler]);
    registerExtension('foo', handler);

    await createAction.parallel('foo');
    expect(spy.mock.calls.length).toBe(3);
  });
});