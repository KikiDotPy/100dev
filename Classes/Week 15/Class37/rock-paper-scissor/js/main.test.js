describe('Main', () => {
    it('Should log "CLICKED" when the Start Battle button has been pushed', ()=> {
        const elem = document.getElementById('startBattle')
        consoleSpy = jest.spyOn(console, 'log');

        elem.click()

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'CLICKED');
    })
});