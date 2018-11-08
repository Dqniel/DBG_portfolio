import { WorkPageModule } from './work-page.module';

describe('WorkPageModule', () => {
  let workPageModule: WorkPageModule;

  beforeEach(() => {
    workPageModule = new WorkPageModule();
  });

  it('should create an instance', () => {
    expect(workPageModule).toBeTruthy();
  });
});
