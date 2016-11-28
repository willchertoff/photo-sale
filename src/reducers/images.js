const initialState = {
  items: [
    { imageId: 1, location: 'Portland, OR', url: '1.JPG', title: 'boxed' },
    { imageId: 2, location: 'Portland, OR', url: '2.JPG', title: 'fly' },
    { imageId: 3, location: 'Portland, OR', url: '3.JPG', title: 'mono' },
    { imageId: 4, location: 'Portland, OR', url: '4.JPG', title: 'no smoking' },
    { imageId: 5, location: 'Portland, OR', url: '5.JPG', title: 'tall' },
    { imageId: 6, location: 'Portland, OR', url: '6.JPG', title: 'taller' },
  ],
  selectedImageIds: [],
};

export default function images(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
