var gdjs;(function(t){t.PixiFiltersTools.registerFilterCreator("Scene3D::HueAndSaturation",new class{makeFilter(s,a){return typeof THREE=="undefined"?new t.PixiFiltersTools.EmptyFilter:new class{constructor(){this.shaderPass=new THREE_ADDONS.ShaderPass(THREE_ADDONS.HueSaturationShader),this._isEnabled=!1}isEnabled(e){return this._isEnabled}setEnabled(e,r){return this._isEnabled===r?!0:r?this.applyEffect(e):this.removeEffect(e)}applyEffect(e){return e instanceof t.Layer?(e.getRenderer().addPostProcessingPass(this.shaderPass),this._isEnabled=!0,!0):!1}removeEffect(e){return e instanceof t.Layer?(e.getRenderer().removePostProcessingPass(this.shaderPass),this._isEnabled=!1,!0):!1}updatePreRender(e){}updateDoubleParameter(e,r){e==="hue"&&(this.shaderPass.uniforms[e].value=r/180),e==="saturation"&&(this.shaderPass.uniforms[e].value=r)}getDoubleParameter(e){return e==="hue"?this.shaderPass.uniforms[e].value*180:e==="saturation"?this.shaderPass.uniforms[e].value:0}updateStringParameter(e,r){}updateColorParameter(e,r){}getColorParameter(e){return 0}updateBooleanParameter(e,r){}getNetworkSyncData(){return{h:this.shaderPass.uniforms.hue.value,s:this.shaderPass.uniforms.saturation.value}}updateFromNetworkSyncData(e){this.shaderPass.uniforms.hue.value=e.h,this.shaderPass.uniforms.saturation.value=e.s}}}})})(gdjs||(gdjs={}));
//# sourceMappingURL=HueAndSaturationEffect.js.map