import fetchMock from 'jest-fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from "./auth";

import { mocked } from 'ts-jest'

jest.mock('expo-auth-session');

fetchMock.enableMocks();

const userTest = {
  id: 'any_id',
  email: 'john.doe@email.com',
  name: 'John Doe',
  photo: 'any_photo.png',
};

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => ({
      type: 'success',
      params: {
        access_token: 'any_token',
      }
    })
  }
})


describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {



    fetchMock.mockResponseOnce(JSON.stringify(userTest));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    // console.log("====================")
    // console.log(result)
    // console.log("dentro do hook em si")
    // console.log(result.current)

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();
  })

  it("user should not connect if cancel authentication with Google", async () => {



    fetchMock.mockResponseOnce(JSON.stringify(userTest));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();

    await act(() => result.current.signOut());

    expect(result.current.user).toBeFalsy();
  })

});