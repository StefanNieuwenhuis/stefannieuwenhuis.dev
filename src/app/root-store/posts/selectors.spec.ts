import { PostsSelectors } from ".";

const mockedPosts = [
    { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
    { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' }
];
const mockedState = {
    posts: {
        ids: [1, 2],
        entities: {
            1: { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
            2: { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' }
        },
        selectedPostId: null,
        loading: false,
        error: null
    }
};

describe('Posts Selectors', () => {
    it('should return the loading state', () => {
        expect(PostsSelectors.selectLoadingState.projector(mockedState)).toBeFalsy();
    });
});