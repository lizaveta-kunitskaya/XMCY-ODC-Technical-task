import { ImageSrcPipe } from './image-src.pipe';

describe('ImageSrcPipe', () => {
  const pipe = new ImageSrcPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform course duration value', () => {
    const mockId = '88';
    const mockWidth = 500;
    const transformedValue = pipe.transform(mockId, mockWidth);

    expect(transformedValue).toEqual('https://picsum.photos/id/88/500');
  });
});
