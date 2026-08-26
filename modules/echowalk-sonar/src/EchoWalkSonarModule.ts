import { NativeModule, requireOptionalNativeModule } from "expo";

export type SonarReading = {
  distanceMeters: number | null;
  confidence: number;
  peakScore: number;
  sampleRate: number;
};

declare class EchoWalkSonarNativeModule extends NativeModule {
  pingAndMeasure(): Promise<SonarReading>;
}

export default requireOptionalNativeModule<EchoWalkSonarNativeModule>("EchoWalkSonar");
