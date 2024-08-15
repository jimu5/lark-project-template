/**
 * Copyright (2024) Bytedance Ltd. and/or its affiliates 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */

package com.meego.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.meego.demo.interceptor.TokenInterceptor;
import com.meego.demo.utils.JsonUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

	@Autowired
    private LarkPropertiesConfiguration larkPropertiesConfiguration;
	
	@Autowired
	private TokenInterceptor tokenInterceptor;
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		log.info("ExcludePaths:{}", JsonUtils.writeValueAsString(larkPropertiesConfiguration.getExcludePaths()));
		registry.addInterceptor(tokenInterceptor).addPathPatterns("/**").excludePathPatterns(larkPropertiesConfiguration.getExcludePaths());;
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("*")
			.allowedMethods("GET", "POST", "DELETE")
			.allowedHeaders("*");
	}

	
	
}
