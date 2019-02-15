import RenderableError from './renderableError';

export default {

  verifyEnv: () => {
    try {
      const canvas = document.createElement('canvas');
      const meetsRequirements = !!(window.WebGLRenderingContext
        && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      if (!meetsRequirements) {
        throw new Error();
      }
    } catch (e) {
      const renderMsg = 'You are unable to view this website because it requires WebGL support.';
      throw new RenderableError('WebGL is not available on system', renderMsg);
    }
  },

};
