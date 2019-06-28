import pause from '@marcopeg/utils/lib/pause'
import { resetState } from '../lib/state'
import { createHook } from '../lib/create-hook'
import { registerAction } from '../lib/register-action'

describe('hooks/serie', () => {
    beforeEach(resetState)

    it('should run serie hooks', async () => {
        const handler = jest.fn()
        registerAction({
            hook: 'foo',
            handler: async () => {
                await pause()
                handler()
            }
        })
        await createHook('foo', { async: 'serie'})
        expect(handler.mock.calls.length).toBe(1)
    })
    
    it('should run serie hooks - with helper', async () => {
        const handler = jest.fn()
        registerAction({
            hook: 'foo',
            handler: async () => {
                await pause()
                handler()
            }
        })
        await createHook.serie('foo')
        expect(handler.mock.calls.length).toBe(1)
    })
})