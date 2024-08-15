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

import React, { useCallback, useContext, type FC } from 'react';
import { ConfigContext } from '../../context/configContext';
import type { AsyncFormSelectProps } from '../AsyncFormSelect/AsyncFormSelect';
import AsyncFormSelect from '../AsyncFormSelect/AsyncFormSelect';

type Props = Omit<AsyncFormSelectProps, 'fetchData'>;

const EventSelect: FC<Props> = (props) => {
  const { ...rest } = props;
  const { eventList } = useContext(ConfigContext);

  const fetchEventList = useCallback(
    async () =>
      eventList.map((item) => ({
        label: item.name,
        value: item.key,
      })),
    [eventList],
  );

  return (
    <AsyncFormSelect
      {...rest}
      fetchData={fetchEventList}
    />
  );
};

export default EventSelect;
