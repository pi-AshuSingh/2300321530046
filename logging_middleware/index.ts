export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';
export type LogPackage = 'ui' | 'handler' | 'api' | 'state' | 'auth' | 'service' | 'store';
export type LogStack = 'frontend' | 'backend' | 'mobile' | 'ops';

const validLevels = new Set(['debug', 'info', 'warn', 'error', 'fatal']);
const validStacks = new Set(['frontend', 'backend', 'mobile', 'ops']);
const validPackages = new Set(['ui', 'handler', 'api', 'state', 'auth', 'service', 'store']);

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function validate(value: string, allowed: Set<string>, fieldName: string) {
  const normalized = normalize(value);
  if (!allowed.has(normalized)) {
    throw new Error(`${fieldName} must be one of: ${Array.from(allowed).join(', ')}`);
  }
  return normalized;
}

export async function Log(stack: string, level: string, packageName: string, message: string) {
  const payload = {
    stack: validate(stack, validStacks, 'stack'),
    level: validate(level, validLevels, 'level'),
    package: validate(packageName, validPackages, 'package'),
    message: message.trim()
  };

  try {
    await fetch('http://4.224.186.213/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.warn('Log dispatch failed:', error);
  }
}
