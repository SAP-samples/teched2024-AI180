package org.demo.dsag;

import com.sap.ai.sdk.orchestration.AzureContentFilter;
import com.sap.ai.sdk.orchestration.AzureFilterThreshold;
import com.sap.ai.sdk.orchestration.Message;
import com.sap.ai.sdk.orchestration.OrchestrationClient;
import com.sap.ai.sdk.orchestration.OrchestrationModuleConfig;
import com.sap.ai.sdk.orchestration.OrchestrationPrompt;
import com.sap.ai.sdk.orchestration.TemplateConfig;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.scheduler.Schedulers;

import javax.annotation.Nonnull;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import static com.sap.ai.sdk.orchestration.OrchestrationAiModel.GEMINI_1_5_FLASH;
import static com.sap.ai.sdk.orchestration.OrchestrationAiModel.Parameter.TEMPERATURE;

@RestController
@SuppressWarnings("unused")
@RequestMapping("/orchestration")
class OrchestrationController {
  private final OrchestrationClient client = new OrchestrationClient();

  private final OrchestrationModuleConfig config =
      new OrchestrationModuleConfig().withLlmConfig(GEMINI_1_5_FLASH.withParam(TEMPERATURE, 0.0));

  @GetMapping("/simple")
  String simple(
      @Nonnull @RequestParam(value = "famousPhrase", required = false, defaultValue = "Hello World!" ) final String famousPhrase
  ) {
    return "TODO";
  }

  @GetMapping("/template")
  String template(
      @Nonnull @RequestParam(value = "language", required = false, defaultValue = "German" ) final String language
  ) {
    return "TODO";
  }

  @GetMapping("/filtering")
  @Nonnull
  String filtering(
      @Nonnull @RequestParam(value = "policy", required = false, defaultValue = "6") final AzureFilterThreshold policy
  ) {
    return "TODO";
  }

  @GetMapping("/stream")
  Flux<String> stream(
      @Nonnull @RequestParam(value = "topic", required = false, defaultValue = "Developing a software project" ) final String topic
  ) {
    var stream = Stream.of("TODO");
    return Flux.fromStream(stream).publishOn(Schedulers.parallel());
  }

}
