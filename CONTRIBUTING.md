# Contributing to EchoWalk

EchoWalk is intentionally small while the acoustic sensing approach is validated.

Useful contributions include:

- Android audio latency measurements across phone models
- chirp/correlation improvements
- echo-confidence scoring
- false-positive/false-negative test cases
- accessibility review and screen-reader testing
- haptic pattern evaluation
- documentation and reproducible device test reports

Please avoid expanding the prototype with accounts, cloud services, mapping, LiDAR dependencies, or external hardware unless the core phone-only sonar path has first been validated.

For changes that affect proximity warnings, include the phone model, Android version, test environment, approximate known obstacle distances, and whether the reading was stable/repeatable.

## Pull requests

Keep changes focused and explain the accessibility impact. Pull requests should pass the repository checks before merge. Changes to the native sonar algorithm should include before/after test data whenever possible.

## Safety

Do not describe EchoWalk as a certified mobility or medical device. It is an experimental supplemental cue and must not be presented as a replacement for a cane, guide dog, trained human assistance, or established orientation-and-mobility techniques.
