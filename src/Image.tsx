import React, { useState } from 'react';

export default function Image({source}: {source: string}) {
  return (
  <img src={source} width="80%" alt="hired" />
  );
}
