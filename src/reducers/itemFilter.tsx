const initialState: any = [];

export default function itemFilter(state = initialState, action: any) {
  switch (action.type) {
    case 'CALL_API':
      return {
        state: [...action.originaldata],
      };
    default:
      return state;
  }
}
