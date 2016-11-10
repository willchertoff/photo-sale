const initialState = {
  items: [
    { imageId: 1, location: 'Portland, OR', url: '/images/boxed.JPG', title: 'boxed' },
    { imageId: 2, location: 'Portland, OR', url: '/images/fly.JPG', title: 'fly' },
    { imageId: 3, location: 'Portland, OR', url: '/images/mono.JPG', title: 'mono' },
    { imageId: 4, location: 'Portland, OR', url: '/images/no-smoking.JPG', title: 'no smoking' },
    { imageId: 5, location: 'Portland, OR', url: '/images/tall.JPG', title: 'tall' },
    { imageId: 6, location: 'Portland, OR', url: '/images/taller.JPG', title: 'taller' },
  ],
};

export default function images(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
