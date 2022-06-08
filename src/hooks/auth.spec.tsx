import fetchMock from 'jest-fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from "./auth";
import { mocked } from 'ts-jest/utils'
import { startAsync } from 'expo-auth-session';

jest.mock('expo-auth-session');

fetchMock.enableMocks();

const userTest = {
  id: 'any_id',
  email: 'john.doe@email.com',
  name: 'John Doe',
  photo: 'any_photo.png',
};


describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {

    const googleMocked = mocked(startAsync as any);

    googleMocked.mockResolvedValueOnce({
      type: 'success',
      params: {
        accessToken: 'any_token',
      }
    })


    fetchMock.mockResponseOnce(JSON.stringify(userTest));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe(userTest.email);
  })

  it("user should not connect if cancel authentication with Google", async () => {

    const googleMocked = mocked(startAsync as any);

    googleMocked.mockResolvedValueOnce({ type: 'cancel' })


    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty('id');
  })

  it("user should be error with incorrectly Google parameters", async () => {

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    try {
      await act(() => result.current.signInWithGoogle());
    } catch {
      expect(result.current.user).toEqual({});
    }
  })
});