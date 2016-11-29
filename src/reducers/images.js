const initialState = {
  items: [
    { imageId: 1, location: 'Portland, OR', url: '1.JPG', title: 'boxed' },
    { imageId: 2, location: 'Portland, OR', url: '2.JPG', title: 'fly' },
    { imageId: 3, location: 'Portland, OR', url: '3.JPG', title: 'mono' },
    { imageId: 4, location: 'Portland, OR', url: '4.JPG', title: 'no smoking' },
    { imageId: 5, location: 'Portland, OR', url: '5.JPG', title: 'tall' },
    { imageId: 6, location: 'Portland, OR', url: '6.JPG', title: 'title6' },
    { imageId: 7, location: 'Portland, OR', url: '7.JPG', title: 'title7' },
    { imageId: 8, location: 'Portland, OR', url: '8.JPG', title: 'title8' },
    { imageId: 9, location: 'Portland, OR', url: '9.JPG', title: 'title9' },
    { imageId: 10, location: 'Portland, OR', url: '10.JPG', title: 'title10' },
  ],
  selectedImageIds: [],
};

export default function images(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
